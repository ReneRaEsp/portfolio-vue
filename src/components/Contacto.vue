<template>
    <div class="contacto">
        <div class="tituloCont cont justify-center">
            <h2 class="titulo">Contacto</h2>
        </div>
        <div class="container">
            <div class="izquierda">
                <div class="contacto">
                    <div class="group">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                fill="rgb(28, 68, 75)"
                                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                            />
                        </svg>
                        <h5 class="text">Email: rdejramirez@gmail.com</h5>
                    </div>
                    <div class="group">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                fill="rgb(28, 68, 75)"
                                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                            />
                        </svg>
                        <h5 class="text">Telefono: +51-941339689</h5>
                    </div>
                    <div class="group">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                fill="rgb(28, 68, 75)"
                                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                            />
                        </svg>
                        <h5 class="text">Telegram: @rrteam7</h5>
                    </div>
                </div>
            </div>
            <div class="derecha">
                <div class="links"></div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
// Utility clases
.cont {
    display: flex;
}
.justify-center {
    justify-content: center;
}
.icon {
    width: 3rem;
}
// Semantic clases
.contacto {
    .tituloCont {
        margin-top: 3rem;
        margin-bottom: 4rem;
        .titulo {
            font-size: 1.8rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.712);
        }
    }
    .container {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 3rem;
        .izquierda {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 50rem;
            height: 50rem;
            background: rgba(36, 146, 119, 0);
            .contacto {
                margin-top: 2rem;
                background: rgba(192, 192, 192, 0.726);
                width: 35rem;
                height: 35rem;
                border-radius: 5px;
                .group {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    padding-top: 3rem;
                    .text {
                        font-size: 1.4rem;
                    }
                    .icon {
                        width: 2rem;
                        margin-right: 10px;
                    }
                }
            }
        }
        .derecha {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 60rem;
            height: 60rem;
            background: rgba(36, 146, 119, 0);
            .links {
                margin-top: 2rem;
                background: rgba(192, 192, 192, 0.726);
                width: 25rem;
                height: 40rem;
                border-radius: 5px;
            }
        }
    }
}
</style>