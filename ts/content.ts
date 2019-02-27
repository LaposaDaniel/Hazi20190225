import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        // Alapvető adat típusok.
        // 1. bool typus.
        // Bool típusú változó incializálása. Nem használható a var. A const azért nem használható mert változik.
        let isDone: boolean = false;
        res.write(`isDone = ${isDone}<br>`);
        isDone = true;
        res.write(`isDone = ${isDone}<br>`);
        // 2. Szám típus, minden számot 64bites lebegőpontos számként kezel.
        let decimal: number; // értékadás
        decimal = 6; // inicializáció
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        let floatNumber: Number = 3.14;
        res.write(`decimal = ${decimal}<br>`);
        res.write(`hex = ${hex}<br>`);
        res.write(`binary = ${binary}<br>`); // binárisba kiírása.
        res.write(`octal = ${octal}<br>`);
        res.write(`floatNumber = ${floatNumber}<br>`);
        // 3. string adattípus;
        let color: string = "blue";
        res.write(`color = ${color}<br>`);
        color = "red"; // JS és a TS engedi az aposztrófokat is, de a tslint nem engedi.
        res.write(`color = ${color}<br>`);
        res.end();
    }
}
