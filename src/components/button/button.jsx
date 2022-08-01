import { ButtonStyle, Imagem } from "./style";

function Button ({ 
        bd_width=1, 
        bd_color="none", 
        bg="white", 
        c, 
        radius=4, 
        w=133, 
        h=48, 
        text, 
        icon=false, 
        mob_w, 
        mob_h, 
        font, 
        mob_font,
        img_w,
        img_h,
        mob_img_w,
        mob_img_h,
        alt="iamgem do botão",
        p="1px 6px",
        m="0px",
        onClick
    }) {
    if ( icon !== false ) {
        return (
            <ButtonStyle
                width={w} 
                height={h} 
                background={bg}
                border_color={bd_color}
                border_width={bd_width}
                border_radius={radius}
                color={c}
                width_mobile={mob_w}
                height_mobile={mob_h}
                padding={p}
                margin={m}
                onClick={onClick}
            >
                <Imagem 
                    width_imagem={img_w}
                    height_imagem={img_h} 
                    width_imagem_mobile={mob_img_w}
                    height_imagem_mobile={mob_img_h}
                    src={icon} 
                    alt={alt}
                />

            </ButtonStyle>
        )
    }

    return (
        <ButtonStyle 
            width={w} 
            height={h} 
            background={bg}
            border_color={bd_color}
            border_width={bd_width}
            border_radius={radius}
            color={c}
            width_mobile={mob_w}
            height_mobile={mob_h}
            fonte={font}
            fonte_mobile={mob_font}
            padding={p}
            margin={m}
            onClick={onClick}
        >
            {text}
        </ButtonStyle>
    )
};

export default Button;