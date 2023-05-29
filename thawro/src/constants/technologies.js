import {
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
} from "../assets";

const technologies = [
    {
        name: "Python",
        icon: python,
        color: "textPrimary",
    },
    {
        name: "PyTorch",
        icon: pytorch,
        color: "textPrimary",
    },
    {
        name: <>PyTorch<br />Lightning</>,
        icon: lightning,
        color: "textPrimary",
    },
    {
        name: "NumPy",
        icon: numpy,
        color: "textPrimary",
    },
    {
        name: "git",
        icon: git,
        color: "textPrimary",
    },
    {
        name: "docker",
        icon: docker,
        color: "textPrimary",
    },
    {
        name: <>Weights<br />and<br />Biases</>,
        icon: wandb,
        color: "white",
    },
    {
        name: "plotly",
        icon: plotly,
        color: "textPrimary",
    },
    {
        name: "mlflow",
        icon: mlflow,
        color: "textPrimary",
    },
    {
        name: "seaborn",
        icon: seaborn,
        color: "textPrimary",
    },
    {
        name: "matplotlib",
        icon: matplotlib,
        color: "black",
    },
    {
        name: "scikit-learn",
        icon: sklearn,
        color: "textPrimary",
    },
];

export default technologies