import { Invader } from "./Invader";

const squidImage =
`---oo---
--oooo--
-oooooo-
oo-oo-oo
oooooooo
--o--o--
-o-oo-o-
o-o--o-o`;

export class Squid extends Invader {
    constructor() {
        super('squid', squidImage);
    }
}