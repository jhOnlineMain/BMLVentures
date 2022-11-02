import React from "react";
import {Link} from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";


const LinkTileGrid = (props) => {


    let tiles = props.tileGrid 
    
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
             }}>
            
                { 
                tiles.map( (item,index) => (   

                    <div 
                    className="tile"
                    key={item + index}
                    style={{
                        display:'grid',
                        gridTemplateRows:'66% 33%',
                        gridTemplateColumns: 'auto',
                        border: '2.5px groove rgba(255,255,255,0.5)',
                        padding: '12px',
                        borderRadius:'5px'
                    }}>

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
                            placeSelf:'center',
                            padding: '8px',
                            paddingTop:'16px'
                        }}>
                            <Link 
                            to={item.pagelink}
                            style={{
                                textDecoration:'none',
                                fontWeight:'bold',
                                color:'#1a1a1a'
                            }}>  

                                {item.label} 

                            </Link>

                        </div>

                </div>

                ))}
            
            </div>

            
        )
}

export default LinkTileGrid