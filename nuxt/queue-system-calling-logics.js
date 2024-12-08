    const { $pusher } = useNuxtApp();
    const service_channel = $pusher().subscribe('ph-service-channel-' + office_user.value.data.id);
    const text = ref('');
    const caller_data = ref([]); // Bucket to store caller data

    let isProcessing = false; // Flag to track if a call is currently being processed
    const processQueue = async () => {
        if (isProcessing || caller_data.value.length === 0) return;

        isProcessing = true;
        const currentCall = caller_data.value[0]; // Get the first call from the queue

        text.value = currentCall.message; // Update the text to the current message

        startCallTimer(); // Start the timer

        await playGoogle(); // Wait for the TTS to complete
        // Wait for the timer to finish (8 seconds)
        const timerPromise = new Promise((resolve) => {
            const timerInterval = setInterval(() => {
                if (call_timer.value >= 8) {
                    stopCallTimer();
                    call_timer.value = 0;
                    clearInterval(timerInterval);
                    resolve();
                }
            }, 1000);
        });

        await timerPromise;

        caller_data.value.shift(); // Remove the processed call
        isProcessing = false; // Mark as not processing
        processQueue(); // Process the next call if available
    };

    // Bind to the channel and push data to caller_data
    service_channel.bind('callToken', (data) => {
        console.log('callToken', data);
        let token = data.token;

        // Add a space after every digit
        token = token.replace(/(\d|-)/g, ' $1 - - - ');
        // Trim any trailing space
        token = token.trim();

        const counter = data.counter.counter_number;
        const message = 'Calling Token Number ' + token + ' Counter ' + counter;
        caller_data.value.push({ message }); // Add the message to the queue

        processQueue(); // Start processing the queue
    });

    const call_timer = ref(0);
    let timerId = null;
    const startCallTimer = () => {
        if (!timerId) {
            timerId = setInterval(() => {
                call_timer.value++;
            }, 1000);
        }
    };
    const stopCallTimer = () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    };

    // Function to play Google TTS
    const playGoogle = async () => {
        try {
            const response = await fetch('/api/google-service', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text.value }),
            });

            if (!response.ok) {
                console.error('Error fetching audio:', response.statusText);
                return;
            }

            // Convert response to Blob and create an Object URL
            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            // Play the audio
            const audio = new Audio(audioUrl);
            await audio.play();
        } catch (error) {
            console.error('Error during TTS request:', error);
        }
    };
