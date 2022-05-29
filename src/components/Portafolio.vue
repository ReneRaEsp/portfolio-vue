<template>
    <div class="Portafolio">
        <div class="cont tituloCont">
            <h3 class="titulo">Portafolio</h3>
        </div>
        <div class="contProyectos">
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/cuatro.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Pokemon Game</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
            <div class="card">
                <img
                    class="imagenP"
                    src="./../assets/img/presupuesto.png"
                    alt="proyecto portafolio René Ramírez"
                />
                <h3 class="titulo">Presupuesto</h3>
                <p
                    class="parrafo"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cumque labore. Reiciendis, aperiam harum, in a alias repellendus expedita quisquam libero consequuntur nobis odio minus ut hic facilis sit ab!</p>

                <div class="contBotones">
                    <button class="btn btn1">Código</button>
                    <button class="btn">Deploy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
//utility classes
.cont {
    display: flex;
    justify-content: center;
}
.tituloCont {
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.titulo {
    font-weight: bold;
    color: rgba(230, 227, 227, 0.863);
    font-size: 2rem;
    margin-top: 0.5rem;
}
.parrafo {
    padding: 1rem 3.5rem 0rem 3.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: rgba(174, 252, 226, 0.863);
}
.card {
    width: 20rem;
    height: auto;
    background: rgba(5, 64, 92, 0.534);
    margin-top: 1.5rem;
    padding-top: 3rem;
    border-radius: 3.5rem;
}
.imagenP {
    border-radius: 2rem;
    width: 84%;
    height: 14rem;
}
//semantic classes
.Portafolio {
    width: 100%;
    height: auto;
    background: rgba(49, 49, 49, 0.534);
    padding-bottom: 2rem;
    .contProyectos {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        .card {
            .contBotones {
                display: flex;
                justify-content: space-evenly;
                padding: 2rem;
                .btn {
                    width: 8rem;
                    height: 3.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    background: rgba(33, 105, 90, 0.747);
                    color: rgb(50, 115, 212);
                    border: 3px solid rgb(50, 115, 212);
                    border-radius: 1rem;
                    transition: 1s ease;
                    &:hover {
                        background: rgba(209, 255, 246, 0.747);
                        cursor: pointer;
                    }
                }
                .btn1 {
                    background: rgba(33, 105, 91, 0.185);
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .card {
        height: auto;
    }
    .titulo {
        font-size: 1.3rem;
    }
    .parrafo {
        font-size: .7rem;
    }
    .imagenP {
        height: 10rem;
    }
}
</style>