import React from 'react';
import Contact from "../components/Contact";

export default function FootInfo() {
    return (
            <div style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                display: 'flex',
                padding: '20px'
            }}>
                <p style={{
                    padding: ' 5px 10px'
                }}>Polici PBC © 2021 </p>
                <p style={{
                    padding: ' 5px 10px'
                }}>Privacy Policy</p>
                <p style={{
                    padding: ' 5px 10px'
                }}>Terms of Use</p>

                <div style={{
                    marginRight: '0px'
                }}>
                    <Contact></Contact>
                </div>
            </div>


    );
}