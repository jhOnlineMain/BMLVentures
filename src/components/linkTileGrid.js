import React from "react";
import {Link} from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";


const LinkTileGrid = (props) => {


    let tiles = props.tileGrid
    console.log(tiles) 
    
       
        return (
            <div
            className='tile-grid'
            style={{
                display:'flex',
                flexFlow:'row',
                width:'100vw',
                height:'30vh',
                boxSizing:'content-box',
                justifyContent:'space-around',
                alignItems:'center'
        
            }}
            >
            
                { 
                tiles.map( (item,index) => (   
                <div 
                key={item + index}
                className="tile"
                style={{
                    display:'grid',
                    gridTemplateRows:'66% 33%',
                    gridTemplateColumns: 'auto'
                }}
                >
                    <div 
                    className="tile-image"
                    style={{
                        gridRow:'1'
                    }}>
                        <Link to={item.pagelink}>
                            <GatsbyImage
                            image={ getImage(item.image.localFile) }
                            alt={item.image.altText || ""}
                            width={200}
                            />
                        </Link>
                    </div>
                    <div 
                    className="tile-label"
                    style={{
                        gridRow:'2',
                        placeSelf:'center'
                    }}>
                        <Link to={item.pagelink}>  {item.label} </Link>
                    </div>
                </div>

                ))}
            
            </div>

            
        )

}

export default LinkTileGrid