import { Invader } from "./Invader";

const spiderImage =
`--o-----o--
---o---o---
--ooooooo--
-oo-ooo-oo-
ooooooooooo
o-ooooooo-o
o-o-----o-o
---oo-oo---`;

export class Spider extends Invader {
    constructor() {
        super(spiderImage);
    }
}