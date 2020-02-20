import React from "react"
function FooterComponent(){

    return (

        <footer>
                Mushroom
                <div className="Srcs">
                    Information Sourced from: The World Health Organization & The Center for Disease Contorl
                </div>
                <br></br>
            </footer>

    )

}
export const Footer = React.memo(FooterComponent);