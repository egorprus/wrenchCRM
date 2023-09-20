interface SectionTitleProp {
    text?: string,
    subtitle?: string,
}

export const SectionTitle = ({text, subtitle}: SectionTitleProp) => {
    return (
        <>
            <h1 className="section__title">
                {text}
            </h1>
            {subtitle &&
                <p className="section__subtitle">
                    {subtitle}
                </p>
            }
        </>
    )
};