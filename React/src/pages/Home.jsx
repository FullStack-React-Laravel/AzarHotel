import Button from "../ui/Button";
import ViewBox from "../ui/ViewBox";

export default function Home() {
    return (
        <div className="text-4xl text-gray-700">
            Home
            <ViewBox>
                <ViewBox.Open>
                    <Button>Add employee</Button>
                </ViewBox.Open>
                <ViewBox.Window>
                    <div>Hi every employee</div>
                </ViewBox.Window>
            </ViewBox>
            <ViewBox>
                <ViewBox.Open>
                    <Button>Add manager</Button>
                </ViewBox.Open>
                <ViewBox.Window>
                    <div>Hi every manager</div>
                </ViewBox.Window>
            </ViewBox>
        </div>
    );
}
