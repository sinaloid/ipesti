const ipesti = [
    { slug: "histoire", label: "Histoire", children: [] },
    { slug: "vision-missions", label: "Vision & Missions", children: [] },
    {
        slug: "structure-et-gouvernance",
        label: "Structure & Gouvernance",
        children: [
            {
                slug: "detail",
                label: "Structure & gouvernance",
                children: [],
            },
            {
                slug: "laboratiores-associes",
                label: "Tous les laboratoires associés",
                children: [],
            },
            {
                slug: "conseil-scientifique",
                label: "Conseil scientifique",
                children: [],
            },
        ],
    },
    {
        slug: "equipes",
        label: "Equipes",
        children: [
            {
                slug: "equipes-de-direction-administrative",
                label: "Equipe de direction administrative",
                children: [],
            },
            {
                slug: "tous",
                label: "Tous",
                children: [],
            },
            { slug: "chercheurs", label: "Chercheurs", children: [] },
            { slug: "doctorants", label: "Doctorants", children: [] },
            {
                slug: "post-doctorants",
                label: "Post Doctorants",
                children: [],
            },
            {
                slug: "chercheurs-associes",
                label: "Chercheurs Associés",
                children: [],
            },
        ],
    },

    {
        slug: "partenaires-de-recherche",
        label: "Partenaires de recherche",
        children: [
            {
                slug: "partenaires-nationaux",
                label: "Partenaires académiques nationaux",
                children: [],
            },
            {
                slug: "partenaires-internationaux",
                label: "Partenaires académiques internationaux",
                children: [],
            },
            {
                slug: "partenaires-sectoriels-et-industriels",
                label: "Partenaires sectoriels et industriels",
                children: [],
            },
        ],
    },
    {
        slug: "opportunites",
        label: "Opportunités",
        children: [
            {
                slug: "bourses",
                label: "Bourses et soutiens à la recherche",
                children: [],
            },
            { slug: "stages", label: "Programme de stage", children: [] },
        ],
    },
    {
        slug: "prix-et-distinctions",
        label: "Prix & distinctions",
        children: [],
    },
];

const recherche = [
    {
        slug: "programmes-de-recherche",
        label: "Programmes de recherche",
        children: [],
    },
    {
        slug: "projets-de-recherche",
        label: "Projets de recherche",
        children: [],
    },
    {
        slug: "seminaires-de-recherche",
        label: "Séminaires de recherche",
        children: [],
    },
    {
        slug: "tous-les-seminaires",
        label: "Tous les séminaires de l’IPESTI",
        children: [],
    },
];

const formation = [
    {
        slug: "formation-courte-duree",
        label: "Formation courte durée",
        children: [],
    },
    {
        slug: "formation-longue-duree",
        label: "Formation longue durée",
        children: [],
    },
    { slug: "phd-academy", label: "PhD Academy", children: [] },
    { slug: "etudes", label: "Etudier à IPESTI", children: [] },
];

const publication = [
    { slug: "theses", label: "Thèses", children: [] },
    { slug: "rapports-annuels", label: "Rapports annuels", children: [] },
    { slug: "articles", label: "Articles", children: [] },
    { slug: "livres", label: "Livres", children: [] },
    {
        slug: "rapport-de-projets",
        label: "Rapport de projets",
        children: [],
    },
    {
        slug: "plans-strategiques",
        label: "Plans stratégiques",
        children: [],
    },
    { slug: "newsletters", label: "Newsletters", children: [] },
];

const expertise = [
    { slug: "centres", label: "Centres", children: [
        { slug: "centre-expertise-decision", label: "Centre d’Expertise et d’Aide à la Décision", children: [] },
        { slug: "enseignement-superieur", label: "Observatoire de l’Enseignement Supérieur", children: [] },
        { slug: "science-technologie", label: "Observatoire de la Science et de la Technologie", children: [] },
        { slug: "innovation", label: "Observatoire de l’Innovation", children: [] },
        { slug: "ethique-et-qualite", label: "Observatoire d’éthique et la Qualité de l’Enseignement supérieur", children: [] },
        { slug: "transformation-numerique", label: "Observatoire de la transformation numérique", children: [] },
    ] },
    
];






const actualites = [
    { slug: "actualites", label: "Actualités", children: [] },
    { slug: "evenements", label: "événements", children: [] },
];

export { ipesti, recherche, formation, publication, actualites, expertise };
