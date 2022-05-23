<template>
    <div id="Seccion1">
        <h3 class="bienvenida">Bienvenido/a, mi nombre es</h3>
        <h2 class="nombre">René Ramírez</h2>
        <h3 class="titulo">FullStack Developer (MERN/MEVN)</h3>
        <div class="botones1">
            <button class="botonA">Descargar CV</button>
            <button class="botonB">Contactar</button>
        </div>
        <div class="redes">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <i class="fa-brands fa-linkedin"></i>
            <svg class="linkedIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                fill="#fff"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
#Seccion1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    .bienvenida {
        margin-top: 7rem;
        color: rgba(244, 242, 212, 0.65);
    }
    .nombre {
        margin-top: 2rem;
        color: white;
        font-weight: bold;
        font-size: 2.9rem;
    }
    .titulo {
        margin-top: 1rem;
        color: rgba(233, 222, 212, 0.65);
    }
    .botones1 {
        display: flex;
        flex-direction: row;
        padding-top: 2rem;
        width: 30rem;
        justify-content: space-evenly;

        .botonA {
            background: rgb(0, 0, 0);
            color: rgba(43, 156, 20, 0.733);
            border: 3px solid rgba(27, 165, 50, 0.747);
            padding: 1rem;
            font-size: 1.4rem;
            border-radius: 0.5rem;
            transition: 1.2s ease;
            cursor: pointer;
            &:hover {
                background: rgba(255, 255, 255, 0.842);
                color: rgba(26, 85, 14, 0.733);
                border: 3px solid rgba(16, 94, 29, 0.747);
            }
        }
        .botonB {
            background: rgba(43, 156, 20, 0.733);
            color: rgb(18, 56, 10);
            border: 3px solid rgba(43, 156, 20, 0.733);
            padding: 1rem;
            font-size: 1.4rem;
            border-radius: 0.5rem;
            transition: 1.2s ease;
            cursor: pointer;
            &:hover {
                background: rgba(255, 255, 255, 0.842);
                color: rgba(26, 85, 14, 0.733);
                border: 3px solid rgba(16, 94, 29, 0.747);
            }
        }
    }
    .redes {
        .linkedIn {
            width: 4rem;
            color: white;
        }
    }
}
</style>