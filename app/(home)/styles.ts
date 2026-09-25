import { css } from '@emotion/react'

const styles = {
    root: css`
        background-color: #e8e8e8;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 48px;
        box-sizing: border-box;
        padding: 16px;

        & section {
            width: min(900px, 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `
}

export default styles;