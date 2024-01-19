<template>
    <div>
        <div class="internship">
            <h1 class="text-3xl intern-heading">EXPEIRENCE</h1>
            <h1 class="text-5xl intern-heading">INTERN</h1>
            <div v-for="intern in interns" class="intern-tile">
                <InternTile :intern="intern" class="items-center" />
            </div>
        </div>
        <br><br>
    </div>
</template>
<script setup lang="ts">
    type InternDetails = {
    company: string;
    logo: string;
    description: string;
    position: string;
    period: string;
    location: string;
    work: string[];
};

const interns: InternDetails[] = [
    {   
        "company": "Oracle India Private Limited, IDC",
        "logo": "/assets/images/oracle_logo.png",
        "description": "Oracle Communications provides technology solutions for telecommunications companies, focusing on network operations, service delivery, and customer engagement. They offer products and services for managing complex networks, optimizing operations, and enhancing customer experiences.",
        "position": "Project Intern",
        "period": "January 2024 - Present",
        "location": "Remote",
        "work": [ "Working in the Communications Division of Oracle India." ]
    },
    {   
        "company": "Powstik, Aadya Pvt. Ltd.",
        "logo": "/assets/images/powstik_logo.png",
        "description": "Powstik.com is an e-commerce site specializing in organic and healthy products. They provide consultations and offer monthly essential packs to support individuals in maintaining a balanced and healthy lifestyle.",
        "position": "Backend Developer Intern",
        "period": "May 2022 - July 2022",
        "location": "Remote",
        "work": [
            "Developed a full-fledged E-Commerce application using the Flask Python framework, leveraging tools like YAML for configuration management and Postman for testing and documenting APIs.",
            "Implemented Python routes to enable efficient data posting and retrieval through APIs, ensuring a seamless functioning of the application.",
            "Gained valuable experience in back-end development, data management, and utilizing tools like YAML and Postman within an E-Commerce context."
        ]
    }
];
</script>
<style>
    .internship {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 9%;
    }

    .intern-heading {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        letter-spacing: 10px;
        color: #fff;
        margin: 0 0;
        margin-bottom: 0.7%;
    }

    @media (max-width: 1024px) {
        
    }
    @media (min-width: 1024px) {
        .intern-tile{
            width: 900px;
        }
    }
</style>