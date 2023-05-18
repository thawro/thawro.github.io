import {
    ml_engineer,
    python_developer,
    data_scientist,
    researcher,
    pytorch,
    lightning,
    python,
    numpy,
    plotly,
    mlflow,
    wandb,
    sklearn,
    seaborn,
    matplotlib,
    git,
    docker,
    bonasoft,
    mxlabs,
    flowers_classification,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Python Developer",
        icon: python_developer,
    },
    {
        title: "ML Engineer",
        icon: ml_engineer,
    },
    {
        title: "Data Scientist",
        icon: data_scientist,
    },
    {
        title: "Researcher",
        icon: researcher,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "PyTorch",
        icon: pytorch,
    },
    {
        name: <>PyTorch<br />Lightning</>,
        icon: lightning,
    },
    {
        name: "NumPy",
        icon: numpy,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: <>Weights<br />and<br />Biases</>,
        icon: wandb,
    },
    {
        name: "plotly",
        icon: plotly,
    },
    {
        name: "mlflow",
        icon: mlflow,
    },
    {
        name: "seaborn",
        icon: seaborn,
    },
    {
        name: "matplotlib",
        icon: matplotlib,
    },
    {
        name: "scikit-learn",
        icon: sklearn,
    },

];

const experiences = [
    {
        title: "Python Developer",
        company_name: "Bonasoft",
        icon: bonasoft,
        iconBg: "#aa1326",
        date: "March 2021 - July 2021",
        points: [
            "1",
            "2",
        ],
    },
    {
        title: "Machine Learning Engineer",
        company_name: "MX Labs",
        icon: mxlabs,
        iconBg: "#ffffff",
        date: "July 2021 - July 2023",
        points: [
            "1",
            "2",
            "3",
            "4",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Some text",
        name: "Some name",
        designation: "Some CEO",
        company: "Some company",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Some text",
        name: "Some name",
        designation: "Some CEO",
        company: "Some company",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

const projects = [
    {
        name: "Flowers classification",
        description:
            "Classification of 102 flower species using CNN.",
        tags: [
            {
                name: "DL",
                color: "blue-text-gradient",
            },
            {
                name: "classification",
                color: "green-text-gradient",
            },
            {
                name: "image",
                color: "pink-text-gradient",
            },
        ],
        image: flowers_classification,
        huggingface_url: "https://huggingface.co/spaces/thawro/flowers-102-classification",
        source_code_link: "https://github.com/thawro/flowers-102-classification",
    },
    {
        name: "Flowers classification",
        description:
            "Classification of 102 flower species using CNN.",
        tags: [
            {
                name: "DL",
                color: "blue-text-gradient",
            },
            {
                name: "classification",
                color: "green-text-gradient",
            },
            {
                name: "image",
                color: "pink-text-gradient",
            },
        ],
        image: flowers_classification,
        huggingface_url: "https://huggingface.co/spaces/thawro/flowers-102-classification",
        source_code_link: "https://github.com/thawro/flowers-102-classification",
    },
    {
        name: "Flowers classification",
        description:
            "Classification of 102 flower species using CNN.",
        tags: [
            {
                name: "DL",
                color: "blue-text-gradient",
            },
            {
                name: "classification",
                color: "green-text-gradient",
            },
            {
                name: "image",
                color: "pink-text-gradient",
            },
        ],
        image: flowers_classification,
        huggingface_url: "https://huggingface.co/spaces/thawro/flowers-102-classification",
        source_code_link: "https://github.com/thawro/flowers-102-classification",
    },
];

const flaticon_refs = [
    {
        href: "https://www.flaticon.com/free-icons/brain",
        title: "brain icons",
        text: "Brain icons created by anilofex - Flaticon"
    },
    {
        href: "https://www.flaticon.com/free-icons/data-science",
        title: "data science icons",
        text: "Data science icons created by Eucalyp - Flaticon"
    },

    {
        href: "https://www.flaticon.com/free-icons/data-analytics",
        title: "data analytics icons",
        text: "Data analytics icons created by Triangle Squad - Flaticon"
    },
    {
        href: "https://www.flaticon.com/free-icons/integrated-development-environment",
        title: "integrated development environment icons",
        text: "Integrated development environment icons created by Dewi Sari - Flaticon"
    },
]


export { services, technologies, experiences, testimonials, projects, flaticon_refs };