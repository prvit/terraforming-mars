
import { IActionCard, IResourceCard } from './ICard';
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { ResourceType } from "../ResourceType";
import { CardName } from '../CardName';

export class SecurityFleet implements IActionCard, IProjectCard, IResourceCard {
    public cost: number = 12;
    public tags: Array<Tags> = [Tags.SPACE];
    public cardType: CardType = CardType.ACTIVE;
    public name: CardName = CardName.SECURITY_FLEET;
    public resourceType: ResourceType = ResourceType.FIGHTER;
    public resourceCount: number = 0;

    public getVictoryPoints(player: Player): number {
        return player.getResourcesOnCard(this);
    }
    public play() {
        return undefined;
    }
    public canAct(player: Player): boolean {
        return player.titanium > 0;
    }
    public action(player: Player) {
        player.titanium--;
        player.addResourceTo(this);
        return undefined;
    }
}
