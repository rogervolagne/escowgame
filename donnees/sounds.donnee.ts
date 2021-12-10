import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Sound from "../structures/immersion/sound.structure"

export const bureau_13_sound: Sound = {
    src: "/sound/Bureau_13.wav", 
    is_loop: true
}
export const salle_5_sound: Sound = {
    src: "/sound/Salle5.wav",
    is_loop: true
}
export const couloir_2_sound: Sound = {
    src: "/sound/Couloir2.wav",
    is_loop: true
}

export const bureau_12_sound: Sound = {
    src: "/sound/Bureau_12.wav",
    is_loop: true
}

export const local_technique_sound: Sound = {
    src: "/sound/Local_technique.wav", 
    is_loop: true
}

export const bureau_8_sound: Sound = {
    src: "/sound/Bureau_8.wav",
    is_loop: true
}
export const couloir_1_sound: Sound = {
    src: "/sound/Couloir1.wav",
    is_loop: true
}
export const usine_exterieur_1_sound: Sound = {
    src: "/sound/Usine_exterieur_1.wav",
    is_loop: true
}

export const exterieur_3bis_2_sound: Sound = {
    src: "/sound/Exterieur_3bis_2.wav",
    is_loop: true,
}

export const exterieur_3bis_1_sound: Sound = {
    src: "/sound/Exterieur_3bis_1.wav",
    is_loop: false,                              /* Il y a un bruit de frein au début donc pas boucle*/
    after: new AfterPlaySound(exterieur_3bis_2_sound) 
}

export const exterieur_3_sound: Sound = {
    src: "/sound/Exterieur_3.wav",
    is_loop: true
}

export const exterieur_2_sound: Sound = {
    src: "/sound/Exterieur_2.wav",
    is_loop: true
}

export const exterieur_1_sound: Sound = {
    src: "/sound/Exterieur_1.wav",
    is_loop: true
}

export const message_telephone_sound: Sound = {
    src: "/sound/Message_telephone.wav",
    is_loop: false
}
export const papier1_sound: Sound = {
    src: "/sound/Papier1.wav",
    is_loop: false
}
export const papier2_sound: Sound = {
    src: "/sound/Papier2.wav",
    is_loop: false
}
export const papier3_sound: Sound = {
    src: "/sound/Papier3.wav",
    is_loop: false
}