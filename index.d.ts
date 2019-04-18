declare namespace Miyako
{
    export function create(url: string, options?: Miyako.DownloaderOptions): Miyako.Downloader;
    export const version: string;

    export class Downloader
    {
        constructor(url: string, options?: Miyako.DownloaderOptions);
        public url: string;
        public options: Readonly<Miyako.DownloaderOptions>;
        public download(): Promise<void>;
    }
    
    export interface DownloaderOptions
    {
        maxBytes?: number;
    }
    
    export namespace Terminal
    {
        export class Terminal
        {
            constructor();
            public commands: Miyako.Terminal.Collection<Miyako.Terminal.Command>;
        }
    
        export class Collection<T> extends Map<string, T>
        {
            public filter(func: (i: T) => boolean): T[];
            public map(func: (i: T) => any): T[];
        }
    
        export class Command
        {
            constructor(info: Miyako.Terminal.CommandInfo);
            public command: string;
            public description: string;
            public usage: string;
            public run: (args: string[]) => Promise<string>;
        }
    
        export interface CommandInfo
        {
            command: string;
            description: string;
            run: (args: string[]) => Promise<string>;
            usage?: string;
        }
    }
}

export = Miyako;
