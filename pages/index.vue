<template>
    <div class="landing-page grid-container">
        <div class="image-container p-5">
            <img class="profile-pic transition-opacity duration-1000" src="/assets/images/Akhil.png" alt="profile">
        </div>
        <div class="text-container space-y-4 flex flex-col">
            <h1 ref="roles" class="roles">
                <span class="default-text" ref="defaultText"></span>
                <span class="typed-text" ref="typedText"></span>
                <span class="cursor">|</span>
            </h1>
            <div class="description">
                Welcome to the digital realm where creativity thrives,
                A symphony of ideas, where imagination takes its dives.
            </div>
            <div class="description">
                Step into my virtual abode, a kaleidoscope of passion and dreams,
                Where pixels dance and words weave, unveiling endless streams.
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.initMounted();
    },
    methods: {
        initMounted() {
            this.animateTextTyping();
            this.isMobile = window.innerWidth < 900;
            if (this.isMobile) {
                const roles = this.$refs.roles;
                roles.setAttribute("align", "center");
            }
        },
        animateTextTyping() {
            const defaultText = "I am ";
            const messages = [
                "a Student!",
                "a Software Engineer!",
                "a Full Stack Developer!",
                "a Cloud Enthusiast!",
                "working with Vue.",
                "working with Nuxt.",
                "working with Flask.",
                "working with MERN Stack.",
                "working with AWS!",
            ];
            const speed = 70;
            let index = 0;

            const typeNextCharacter = () => {
                if (index < defaultText.length) {
                    this.$refs.defaultText.textContent += defaultText.charAt(index);
                    index++;
                    setTimeout(typeNextCharacter, speed);
                } else {
                    if (messages.length > 0) {
                        const message = messages.shift();
                        // set a delay of 5 seconds before deleting the message
                        this.typeMessage(message, () => {
                            setTimeout(() => {
                                this.deleteMessage(message, () => {
                                    typeNextCharacter();
                                });
                            }, 1250);
                            this.blinkCursor();
                        });
                        messages.push(message);
                    }
                }
            };

            typeNextCharacter();
        },
        typeMessage(message, callback) {
            const speed = 70; // Typing speed (in milliseconds)
            let index = 0;

            const typeNextCharacter = () => {
                if (index < message.length) {
                    this.$refs.typedText.textContent += message.charAt(index);
                    index++;
                    setTimeout(typeNextCharacter, speed);
                } else {
                    callback();
                }
            };
            typeNextCharacter();
        },
        deleteMessage(message, callback) {
            const speed = 50; // Typing speed (in milliseconds)
            let index = message.length - 1;

            const deleteNextCharacter = () => {
                if (index >= 0) {
                    this.$refs.typedText.textContent = message.substring(0, index);
                    index--;
                    setTimeout(deleteNextCharacter, speed);
                } else {
                    callback();
                }
            };

            deleteNextCharacter();
        },
        blinkCursor() {
            const cursorElement = this.$el.querySelector(".cursor");
            setInterval(() => {
                cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
            }, 500);
        },
    },
};
</script>
  
<style scoped>
.landing-page {
    background-color: #1a202c;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 15%;
    background-image: url("/assets/images/home-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.profile-pic {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    transition: 0.2s;
    opacity: 0;
    animation: reveal 1s forwards;
    transform: translateX(-100px);
}

.cursor {
    display: inline-block;
    color: #ffffff;
    margin-left: 2px;
    animation: blinkCursor 1s infinite;
}

.text-container {
    opacity: 0;
    animation: reveal 1s forwards;
    transform: translateX(-100px);
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.3s;
}

.description {
    font-family: 'Montserrat';
    opacity: 0;
    color: #fff;
    animation: reveal 1s forwards;
    opacity: 0;
    transform: translateX(-100px);
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.3s;
}

@keyframes reveal {
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media (min-width: 1024px) {
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 50px;
    }

    .landing-page {
        background-color: #1a202c;
        height: 100vh;
        justify-content: center;
        align-items: center;
        padding: 15%;
        background-image: url("/assets/images/home-bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .profile-pic {
        width: 250px;
    }

    .profile-pic:hover {
        border-radius: 80% 20% 70% 30% / 26% 71% 29% 74%;
        width: 300px;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }

    .roles {
        max-width: 600px;
        padding: 0 20px;
    }

    .default-text {
        color: #ffffff;
        font-size: 1.8rem;
        /* text-align: center; */
    }

    .typed-text {
        color: #ffffff;
        font-size: 2.5rem;
        /* text-align: center; */
    }

    .cursor {
        font-size: 2.5rem;
    }

    .description {
        font-size: large;
        font-weight: 500;
        padding: 0 0 0 20px;
        text-align: justify;
    }
}

@media (max-width: 1024px) {

    .landing-page {
        background-color: #1a202c;
        height: 100vh;
        padding: 10%;
        background-image: url("/assets/images/home-bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .profile-pic {
        width: 250px;
    }

    .image-container {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile-pic:hover {
        border-radius: 80% 20% 70% 30% / 26% 71% 29% 74%;
        width: 300px;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }

    .text-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .roles {
        max-width: 600px;
        padding: 0 20px;
        height: 90px;
    }

    .default-text {
        color: #ffffff;
        font-size: 1.5rem;
        /* text-align: center; */
    }

    .typed-text {
        color: #ffffff;
        font-size: 2.0rem;
        /* text-align: center; */
    }

    .cursor {
        font-size: 2.0rem;
    }

    .description {
        font-size: large;
        font-weight: 500;
        text-align: justify;
    }

}
</style>