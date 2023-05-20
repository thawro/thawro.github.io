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

export default technologies