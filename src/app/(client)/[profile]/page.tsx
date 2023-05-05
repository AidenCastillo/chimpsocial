
export default function Profile({ params }: { params: { profile: string } }) {
    return (
        <div>
            <p>{params.profile}</p>
        </div>
    )
}