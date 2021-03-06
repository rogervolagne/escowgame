import React from 'react'
import DefaultProps from '../../structures/props.structure'
import style from './home-screen.module.css'

export default class HomeScreen extends React.Component<DefaultProps> {
    constructor(props: DefaultProps) {
        super(props)
    }

    play = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        this.props.player.start()
    }

    render = () => {
        return (
            <section className={style.home}>
                <h1>EscowGame</h1>
                <h3>
                    Grellier - Godde - Gressel - Guesneau - Lasserre<br/>
                    SI28 - Université de technologie de Compiègne
                </h3>
                <p>
                    AVERTISSEMENT : la suite du jeu contient des images
                    susceptibles de choquer la sensibilité des plus
                    fragiles. Si vous ne souhaitez pas continuer
                    l’aventure,  ne suivez pas le chien.
                </p>
                <div className={style.row}>
                    <img alt="volume-up" src="/img/icons/volume-up-fill.svg"/>
                    <button onClick={this.play}>Jouer</button>
                    <img alt="volume-up" src="/img/icons/volume-up-fill.svg"/>
                </div>
            </section>
        )
    }
}