import "console.jsx";

class SnippetConsole {
    var recentMessage : string;
    function constructor() {
        console.log("constructor");
    }
    function log(message:string):void {
        console.log(message);
        console.log(3);
        this.recentMessage = message;
    }
}

class _Main {
    static function main(args : string[]) : void {
        log "hello world!";
        
        var snippet = new SnippetConsole();
        snippet.log("hello world");
    }
}
