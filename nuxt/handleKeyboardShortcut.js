const handleKeyboardShortcut = (event) => {
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault();
        wcag_tool_open.value = !wcag_tool_open.value;
    }
};

const addKeyboardShortcut = () => {
    window.addEventListener("keydown", handleKeyboardShortcut);
}
const removeKeyboardShortcut = () => {
    window.removeEventListener("keydown", handleKeyboardShortcut);
}

onBeforeUnmount(() => {
    removeKeyboardShortcut();
});

onMounted(() => {
  addKeyboardShortcut()
})
