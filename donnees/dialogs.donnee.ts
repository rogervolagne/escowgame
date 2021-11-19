import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import Dialog from "../structures/immersion/dialog.structure"
import { CREDITS_ID, EXTERIEUR_3, EXTERIEUR_3bis } from "./list_ids_room.donnee"
import { EXTERIEUR_2 } from "./list_ids_room.donnee"

export const NARRATEUR = "narrateur"
export const CHIEN = "Le chien" 
export const JOUEUR = "Vous"

export const exterieur_3bis_dialog: Dialog = {
    after: new AfterMoveToRoom(CREDITS_ID),
    frames: [
        {
            character: NARRATEUR,
            text: "Un chien s’extirpe difficilement du grillage et vous coupe la route ! Il aboie fortement et ne semble pas vouloir s’arrêter"
        },
        {
            character: JOUEUR,
            text: "Je devrais peut-être faire demi-tour… Oh mais pourquoi se met-il à pleurer ??"
        },
        {
            character: NARRATEUR,
            text: "Le chien cesse soudainement d'aboyer. Il n’a pas l’air agressif ! Au contraire … Il pousse de petits cris plaintifs et à l’air mal en point. Il baisse la queue et commence à venir vers vous sans trop s’approcher. Il vous regarde avec insistance puis regarde en direction du grillage d’où il vient. On dirait qu’il veut que vous le suiviez."
        },
        {
            character: NARRATEUR,
            text: "Il fait nuit mais ce chien vous intrigue énormément. Que décidez vous ?\nAVERTISSEMENT : La suite du jeu contient des images susceptibles de choquer la sensibilité des plus fragiles. Si vous ne souhaitez pas continuer l’aventure, ne suivez pas le chien."
        }
    ]
}

export const exterieur_3_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_3bis),
    frames: [
        {
            character: JOUEUR,
            text: "… Il commence à faire sombre ici …"
        },
        {
            character: NARRATEUR,
            text: "Vous n’êtes plus si loin de votre habitation, lorsque soudain ..."
        }
    ]
}

export const exterieur_2_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_3),
    frames: [
        {
            character: JOUEUR,
            text: "La nuit tombe, il faut que je me dépêche."
        },
    ]
}

export const exterieur_1_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_2),
    frames: [
        {
            character: JOUEUR,
            text: "… Enfin cette journée s’achève. Quel bonheur de rentrer à vélo par un temps pareil ! La campagne me semble si belle ce soir."
        },
        {
            character: NARRATEUR,
            text: "Vous enfourchez votre vélo et commencez à rentrer chez vous à travers le calme de la campagne."
        }
    ]
}
