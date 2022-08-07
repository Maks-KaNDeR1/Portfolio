import Particles from "react-tsparticles"


type PropsType = {
    theme: string | undefined
}

export const ParticlesComponent: React.FC<PropsType> = ({ theme }) => {

    return (
        <Particles
            id="tsparticles"
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme === 'dark' ? "#4e93e6" : '#fff',
                    },
                    links: {
                        color: theme === 'dark' ? "#4e93e6" : '#fff',
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,

                    },
                    opacity: {
                        value: 0.7,
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}



