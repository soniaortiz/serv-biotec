import React from 'react';
import Box from "@mui/material/Box";

export function Welcome() {
    return (
        <div
            style={
                {
                    // backgroundColor: 'blue'
                }
            }
        >
            <h1>Servicios Biotecnológicos del Guadiana S.A de C.V</h1>
            <Box
                sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    margin: 'auto',
                    width: '50%',
                    height: '50%'

                }}
            >
                <img src='pexels-akil-mazumder-1072824-small.jpg' alt='my alt text' />
            </Box>

            <Box
                sx={{
                    mr: 2,
                    display: { lg: "none", md: "none" },
                    // backgroundColor: 'red'

                }}
            >
                <img src='pexels-akil-mazumder-1072824-small.jpg'
                    alt='lkfdsjlk'
                    style={{
                        margin: 'auto',
                        width: '100%',
                        height: '100%'
                    }} />
            </Box>

            <h2>Quienes somos?</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste error quasi, tempore ut labore nostrum nulla, aut quo corrupti, ea velit accusamus veritatis praesentium obcaecati tempora veniam quas inventore sint?
                </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aliquam fugiat quae, animi maxime saepe eveniet, veniam eaque odit vel placeat. Id qui consequatur velit reprehenderit suscipit debitis nihil ea?</p>
            <h2>Otra descipción</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis corporis aperiam nobis quos odio voluptatibus molestias maxime provident excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A, explicabo earum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis corporis aperiam nobis quos odio voluptatibus molestias maxime provident excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A, explicabo earum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis corporis aperiam nobis quos odio voluptatibus molestias maxime provident excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A, explicabo earum!</p>

        </div>
    );
}
