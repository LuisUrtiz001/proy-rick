import React from 'react'




export default function Characters(props) {

    //console.log(props)

    const { c } = props;

    return (

        <div className='characters'>

            <h1>Personajes</h1>

            <span className='back-home'>Home</span>

            <div className='container-characters'>

                {c.map((characters, index) => (



                    <div className='character-container' key={index}>

                        <div>

                            <img src={characters.image} alt={characters.name} />

                        </div>

                        <div>

                            <h3>{characters.name}</h3>

                            <h6>

                                {characters.status === "Alive" ? (

                                    <>

                                        <span className='alive'></span>

                                        Alive

                                    </>

                                ) : (

                                    <>

                                        <span className='dead'></span>

                                        Dead

                                    </>

                                )}

                            </h6>

                            <p>

                                <span className='text-grey'>Episodios:</span>

                                <span>{characters.episode.length}</span>

                            </p>

                            <p>

                                <span className='text-grey'>Especie:</span>

                                <span>{characters.species}</span>

                            </p>

                        </div>

                    </div>



                )

                )}

            </div>

        </div>

    )

}
