import React from 'react';
import Contact from "../components/Contact";

export default function FootInfo() {
    return (
            <div style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                display: 'inline-flex',
                padding: '20px',
                width: '100%',

            }}>
                <div>
                    <p style={{
                        padding: ' 5px 10px',
                        float: 'left'
                    }}>Polici PBC © 2021 </p>
                    <p style={{
                        padding: ' 5px 10px',
                        float: 'left'
                    }}>Privacy Policy</p>
                    <p style={{
                        padding: ' 5px 10px', float: 'left'
                    }}>Terms of Use</p>
                </div>

                <div style={{
                    marginRight: '0px'
                }}>
                    <Contact></Contact>
                </div>
            </div>


    );
}