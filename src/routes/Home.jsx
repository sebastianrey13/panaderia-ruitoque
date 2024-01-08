import React from 'react'
import '../estilos/home.css'
import CardProductos from '../componentes/CardProductos'
import { v4 as uuidv4 } from 'uuid';
// import pan from ''

const Home = () => {

    

    const productos = [
        {
            id : 1,
            nombre: 'Pan Aliñado',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV87eW7IkdWJCaEBvJsbKqiaoWe9Ui2kY653MCxC60dJA9T7jY85a5QWEJsy6wSYg5gJRemvR7zkEPZ4AbotK9E-dwSsaLrJQGaxNoDObTJZq0ET1Blb5j-ZVswGh4hjvMW1QKizHb45DXoo3-wm0ahZh190xz7FTLAwFH-fCnWYisrTURYIP2s8ZILgAAgvwhkSAh8w6OkxFQeaAKhbY-q-xGZ55WEnK24PyhWgBLzoplF8n_a9gDJRfeoXYscD3Ta528-tHxCtSXZgtQoTH51sKdzANlbVCLMN9XNagONHZtpazvtA2Otc-6ycp-siOdG4zxL3HQ2DqgyxEY_LdCSDpOj8yBIbJEEcGnDloDIjk00-fCFB-lbkeyqr7Y6lOE1o3PLY4o2D3T8d-JkA1_YOhvp3Zaksp55Hna4TjmxfY56nTga2trsg2L5w75tW1rXgS-4fgMMqwO0k_rv1tXsUATVBLj4czEX13uz-QdB6gWbVeevczD9odmkLRZz37FRFgffeSUtA5RJw3u4037JyjzeNmT87dxu-bUi7avNJ2G7NXlVGkaUKk12R0QJ0U-8nYGENHe9AvR4KpkcTR9qH0a7VX9WjKU3XRMu1ZQbOgjW7uzDN1m2HfW6Hin4ZflIHFX0kiD7x87CrRgSFDIPyF5Xy_L2EWZynoPQRpit0EADqdlbirHPdA468jhPNFmmJiODP_RlPKGeCwUPFkyqiz5VKHhmKkE3OWY3ooy7sSEL8qNXX-HM908ym04g3MvgL4nNCQ4kUCi6lpy1jhJ77n8lqt_1nBLb9eBDXUv8hslSB75isQNRFVWcwj_h6r2VQaZG0QXNoEXUhRoScQjd2ueemvT1LgzIEQauTgpb-RDeR3kMjYbZawpBt2HMWWFk4=w1225-h919-s-no-gm?authuser=0',
        },
        {
            id : 2,
            nombre: 'Tortas',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV85vA4hIbnWR2wtNOwmY4inCP2v9mSRBooaHjwPqffzMde67WwshJ3obGcR2gEvHnoSvGya11T_z5eLzKSGEGCD8TE5V_YQ4Zm91zIkKo1ChV89QFXwsPQa5c18Ox1z30-5rrg8MS2R7pI0CiTLteS3RZzYbJwYTVZo1CpPmJXq7xMhrf3wX8yOt332WqHpqEQxNRVnsGqbXVQ6_crZNu1Ei72aACNDMKkNwflkXPK5crS77wZLp-hX1_a69_Z7s-VIzjVkAcj4hD4A9PyxvpwcQ_ks0AS8WG4b5axCh1sNrERXUctrC-OkpiJmq5Xhc4qkUXVs7n43p6pIpP9YLxAQfb-TTY8LiCyNlTKQb5w-XV7K98UxwiTRfbzNRWsqvAoq4Cw65qERng7LgBBFf6cVg50GCNCrL5ccMcbjdFW0UFCgcECXohJ9Bpceh1LMDzrYpHjRUd5Zw0tJIomShB_ESEvoX1uOYTd9-Hs2NAskU312l75b4GCDyBI3GlkqmOEXv0LB3EZno1D4SlOR0wZJxfTeWg1nMkVxq7hCdn3Q7BMOmbRNzwrF1_j5Prr45mCRyycVch-_VhiftdTi22D8YYftknPRxS6ISEE-uVLMNrvk1-6xmkplFnplWAsydtN2OGxYNK5atBldVuDozNLbJqHyAbnvQ-XxFpgkQNE-55MG_40jlzTvxAcuEkpeZp_WBu6mBJpFdZlKf2aH_mnR2DfcFfRxHvLJJCR27Yia7zlxcUIyn9DotLfvXb_DS6V41182YqEsgLuez4oJycnbgPpH6fdErdquGnV4B0et5ugwI4mDauNsdE91Kg9h2U83K2ENzA-oAWeSAzQu_FE6eVXkwMsW1lDw5kcA_yUHLBGkZUuNMq2elFQN7XuZw3PI=w294-h220-no?authuser=0',
        },
        {
            id : 3,
            nombre: 'Bizcochos',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV86oIFVGHK5_7DzyU2uRa9ytAV3IpBLImCdEgcOA9y6tK85_Ul2DpxEYVt6P13hzk-zvXyOPcDSbwLzGq0GpICL2i9mRQjVuxSnjOROuhIUFowZlGApzc9W04jD0NM6EcI7e_DHJ-P3O7sud6NeV_T2cpEB5Yy7FUsSOOOYLGk4N4g_4Q2tL5m9tIojL0bbFIh_U6r_jWRtlYAHQu4a6QSJAgjN2e0XNdPUYUArUjdf-nryoU06440skea_xWlCmKfNlW0RrqoFbSdDFKuQl8OxqwbZpsfx9VpF7Dd6NLo32P-o8WnQKT3xKHVBmruMkd9_V-MZN1RvczXaK4Z2cWL9RPoAWhpvS1PMAuvrBPH-a8RwpDrb4YpIRMRdwErz4AEqwt6VzEVnPaOIXv_oih2BxO87qTSHJq6REQdKO1IJD9AlJCRbk8OibysDqLELdTKpsI6HX0L2hqJ_8C6lL2JJnGo5GafDIgT11bKA_x_x_YIYrktkv6Hi5W3rRL8IPVEwTsc6rfg0L-ZL21dF5-zkUZYf3nehR3w2teBUW6P7BCObe_UXbI2npDs7ZQZNPAoc8wGlmyFQaFuuvtcVfC_OW59oub29iP7esrrWF-ONZw2MvrWc2ERgfK1jH8iVJEpVPucVx-SbIKjOt2zmsTXE5Ra8j-7z7zNNEY34U8IPMtcwqQOcu56WmQkNxylFz_bMvgOu0QW_NumDt-dyOPlMVcCQI54ah-iD530Vlati9-SqeB7JRJhWoDiYcCWD9nhVHhREShp_-b4Q0mLwGjqPDi9PQcFuaNS-6_C6Nv0oUho0ai9BtonX8FWVDlX23uMGPMiIpLd6X15PLKr5U0lMMt3qLO1Ytie_cdSR_Tb1CeDjABBaDrGvN9y-jNvQFZZY=w252-h188-no?authuser=0',
        },
        {
            id : 4,
            nombre: 'Lácteos',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV84MkvEymN3w0hKPkFHm2D7YvbiGhiLFc9sr_pOhx0sdx35bm3ZJfpLXT-txZhGgVdgH0z6ddTlzFFE8q4tGAe3uIuqq4nvnifQut0xwbKHuTbBH8w7EOtO6Cmz_iXNgdA6sXCfFjVHIWEZPhniLl0bt5WC_UYVZyJOUxB0CqIyqKdP7fma0WiZ8nggoXPpeMC_HszgVK2dhICKLA17A9fYd1uAT6m3MH8cOzgDf_Icyn85dPcS-RKAAcL50BF1E_hyMcpOO7kA68Q8HvoqIb_UP9FF4sQh8yW3jlOVCrno0W3a4lW3iYA5Ygsss44KA0IA8bI5LoXYPvDaXjvf84lMc_RYQFfW7T30odSkLT4WEd2a8ZdiPwAatZnN4HSPd0xdsFX9Ez6hp-scK8Z3YeMaZZ4oxZzz7l0twFAB21X0NQctxzcCI7KnXi-qw63xbKYohDchvJxdQPaHf-BbHyTBduX_QaTHG_EtbBaaAwHZDQK-7sad-k0PtHwgxS_5i5ZZ9UU5T7G2xU4tPfpTRiXWJbQgMEnkGmvKsz9to9agNF0W0LluCyg8O-3kF5CCODyf_EAnwqQ8WBv6jgbNjWdAmfyjWZ62UlPnKJN9HVfjSTJQFRzVj077q4FHdmx6QzfBvdMyiZ6QE0ehlykdkbjeVJYvPQzTSQqC0lYbZu_cllljaQTLadiRLl4z2fYxraJwPB3xjLkNCy7-ok6azGf6GSUHv4IiLaEa0j9kSM0sIRnitdgEXN7hkQDLpf7vWYZ_e7AebSFcC4Uf54hAe-nX6bgORpJNT4V6FKI-TUQz3oFFOf55VgkSiPmEDkOJqd4_Yiekntv0bfDLDBHE6sR_zZzl_di_NrtZeqy31i61R_JCnsMruRExW5T04XsIHw0Y=w1000-h667-s-no-gm?authuser=0',
        },
        {
            id : 5,
            nombre: 'Otros',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV87GZ673qewqWck6zwWwbIQH1wkk4J6-mUHElAOrwCuoWZhzjBZI2mUrU2sq-1w9BIU8LBYFssV3sIphcpP89lej76Cjq8BHD4e-qBLzcXwoCL9llDzA45FOx4IzlzETuGf-gyGVDKf-mC9V09PVEo3XbefTWyUyUjvM3OpGhVKiqO3w6uzokuY9IX3dIyGxCedzicC0ZedJqlMyGG-Tk78Wp-Oxw8ElCH_RCZDj-3oFJ3WBf4C5qD10Nu9GyVhjTEWODy30weaWonZIEBC0AEGIp2XUN4qD1bC5PMz0COE4DxnHxUpc-UUOhg4DNucVVdl9v4oLre21wbwbMBsmGxq1K95cedJt_z0OclLup8tmTgOyCtFpKm-CBpSPkDtN_JJUw_bbanU7BGmKC1-MXduD_Bj71YiHaHX7Wn5Ufq_4sSJMNDIqzsaAliOyGDhN8HywiQMgP--IWez_X7DOZKOwOWxwhsAp0f_7zPBNZpD8k9RO5QjcYLyTnaanOK00Sr5BT8mQkuqR3IQCNQU1uqs6Q0WoNHHmpM2rlydjJkrOKp-9KGJrQeHOxpex69PGAYQNm0qW-bP5vd8m9QbR_TTHgFAjsjVfHq3QtzYl4C_Z4C-M8t4rskAzoem6dnYZ3iUpq75y3u8exzIAd2PN23ObdKO8mlt4thgeopU8wBHmc5bREL0bdbEt3LHswJP5X8_WlPa3Nt0qod7vxeaLl88i76Wcsy3SYCrDrbf5_1KjkGAHIc50uvbfpAoLmKmDACvBEECK8mGpEAP1BJClM-ufkUwlSP4o4lFa-5AmZ3UJKuOvrc5bu6RhtpQEw8PjT9LaLdVV-nCzswo6QggtYBmtR_K8Wy9o0Gov_1tqGqInvfVGitZhbu2-BDJrvTbYGdM=w1225-h919-s-no-gm?authuser=0',
        },
        {
            id:6,
            nombre: 'Galletas',
            img : 'https://lh3.googleusercontent.com/pw/ABLVV866p-_R7Vc6wsaIoFBweHH1WJSYLhCVzl4mbUO6LDEOf7QmoyyspRfgVkKLXimHE0gTnXOz0blPYSmf1AfO3Ikl6DiopvQniOJAXQvSBqA0tSr8dElAPaAlb72cAznqJyocDXl4wGAvKNO0McXLjU8y=w1225-h919-s-no-gm?authuser=0'
        }
    ]

    return (
        <div className='fondoApp'>
            <div>
                <h2 className='subtitulo'>Nuestros Productos</h2>
                <div className='contenedorProductos'>
                    {productos.map(props =>(
                        <CardProductos
                        key = {props.id}
                        nombre = {props.nombre}
                        img = {props.img}
                        />
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default Home