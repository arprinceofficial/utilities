export default defineNuxtPlugin(() => {
    return {
        provide: {
            // CMS
            api_cms_languages: '/api/cms/languages',

            // Citizen
            api_citizen_login: '/api/citizen/login',
        }
    };
});