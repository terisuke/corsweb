declare module '@alpinejs/collapse' {
    const collapse: any;
    export default collapse;
}
declare module 'alpinejs' {
    export interface Alpine {
        plugin: (plugin: any) => void;
        store: (name: string, value: object) => any;
        start: () => void;
    }
    const alpine: Alpine;
    export = alpine;
}
declare global {
    interface Window {
    Alpine: typeof import('alpinejs').Alpine;
    }
    interface Alpine {
    $store: {
        theme: {
        isDark: boolean;
        toggle: () => void;
        };
    };
    }
}