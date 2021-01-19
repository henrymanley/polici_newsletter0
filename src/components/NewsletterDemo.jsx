import React from 'react';
// import '../Newsletter.css';

export default function FootInfo() {
    return (
        <div>
            <p class="spacer" />
            <table style ={{width: "650px", cellspacing: 0}}>
                <tr bgcolor ="white">
                    <td style={{
                        paddingRight: '30px',
                        fontsize: '12px',
                        height: '50px',
                        align: 'right',
                        colspan: '2',
                        marginRight: '30px'}}>
                            <span>
                                <a style="font-weight: bold;" href="#">View in browser.</a>
                            </span>
                    </td>
                </tr>
                    <tr>
                        <td>
                            <table width="550px">

                                <tr bgcolor ="white">
                                    <td style={{width: '200px', textalign:'left'}}>
                                        <a href="https://www.polici.org/?utm_source=newsletter&utm_medium=email&utm_campaign=August%2016%20-%20Heading%20Up&utm_content=Header%20logo&utm_term=2020-10-10"/>
                                        <img src="img/logo.png" border="0" alt="Polici Logo" align="left" class="logo" />
                                    </td>
                                    <td style="text-align:right">
                                        <p style="font-weight: bold; font-size:16px">January 18, 2021 </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

            </table>
        </div>

    );

    }