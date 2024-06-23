import { Actor, Vector, CollisionType } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './player.js';

export class RepairKit extends Actor {
    constructor(pos, game) {
        super({
            pos: pos,
            width: 40,
            height: 40,
            collisionType: CollisionType.Passive
        });

        this.game = game;

        const sprite = Resources.RepairKit.toSprite();
        sprite.width = 40;
        sprite.height = 40;
        this.graphics.use(sprite);
    }

    onInitialize(engine) {
        this.on('collisionstart', (evt) => {
            if (evt.other instanceof Player) {
                this.game.increaseLife();
                this.kill();
            }
        });
    }

    onPreUpdate(engine, delta) {
        this.pos.y += delta / 1000 * 100;
        if (this.pos.y > engine.drawHeight) {
            this.kill();
        }
    }
}
