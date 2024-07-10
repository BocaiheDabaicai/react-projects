// eslint-disable-next-line react/prop-types
export default function Tabs({content, buttons, buttonsContainer = 'menu'}) {
    // eslint-disable-next-line no-unused-vars
    const TagsName = buttonsContainer

    return <>
        <TagsName>
            {buttons}
        </TagsName>
        {content}
    </>
}