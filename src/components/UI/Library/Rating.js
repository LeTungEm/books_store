const Rating = ({rate = 5}) => {

    let score = parseFloat(rate.toFixed(1));   
    let stars = [];

    while(score >= 0.5){
        stars.push((score >= 1)?"star":"star-half");
        score--;
    }

    while(stars.length <= 4){
        stars.push("star-outline");
    }

    return (
        <div className="[&>*]:text-base xl:[&>*]:text-lg [&>*]:pr-1 [&>*]:text-yellow-400">
        {
            stars.map(star => (
                <ion-icon key={Math.random()} name={star}></ion-icon>
            ))
        }
        </div>
    );
}

export default Rating