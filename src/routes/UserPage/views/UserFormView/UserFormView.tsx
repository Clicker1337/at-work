export interface UserFormView {
    name: string,
    imageUrl: string,
    description: string,
}

export default function UserFormView(props: UserFormView) {
    return (
        <div className="UserFormView" />
    );
}
