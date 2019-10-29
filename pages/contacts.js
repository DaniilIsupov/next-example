import React from 'react';
import Layout from '../components/Layout/layout';

// import './styles.scss';

const Contacts = () => (
    <Layout title={'Contacts'}>
        <div>
            <h1 className='title'>Contacts</h1>

            <div className="row">
                <table>
                    <tbody>
                        <tr>
                            <td>Telegram:</td>
                            <td>
                                <a href="tg://resolve?domain=danyaman">@danyaman</a>
                            </td>
                        </tr>
                        <tr>
                            <td>VK:</td>
                            <td>
                                <a href="https://vk.me/isupov_daniil">Daniil Isupov</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
);

export default Contacts;
