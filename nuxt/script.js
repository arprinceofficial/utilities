useHead({
    title: current_slug.value
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
});


*** useState ***
==============
Declare =>
const get_lang_translation = useState('get_lang_translation', () => [])
==============
Store =>
get_lang_translation.value = res.data.language_translation
==============
Use Case =>
const get_lang_translation = useState('get_lang_translation')

============== Array use case ==============
if (Array.isArray(get_lang_translation.value)) {
                    const translation = get_lang_translation.value.find((item: any) => item.language_short_code === short_code)
                    return translation ? translation.content : '';
                    // return translation ? translation.content : short_code;
                }
                return short_code;
