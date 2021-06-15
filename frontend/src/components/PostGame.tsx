import './PostGame.css'

interface Props {
    score: number;
}

function PostGame({score}: Props) {

    return(
        <div className="PostGame">
            <p>{score}</p>
        </div>
    )
}

export default PostGame;