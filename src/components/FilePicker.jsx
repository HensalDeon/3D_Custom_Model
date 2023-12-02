import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
    return (
        <div className="filepicker-container">
            <div className="flex-1 flex flex-col">
                <input
                    key={file}
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <div className="flex justify-between">
                    <label htmlFor="file-upload" className="filepicker">
                        Upload File
                    </label>
                    <span className="filepicker" onClick={() => readFile("reset")}>
                        Reset
                    </span>
                </div>
                <p className="mt-2 text-gray-500 text-xs truncate">{file === "" ? "No file selected" : file.name}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
                <CustomButton type="outline" title="Logo" handleClick={() => readFile("logo")} customStyles="text-xs" />
                <CustomButton type="filled" title="Full" handleClick={() => readFile("full")} customStyles="text-xs" />
            </div>
        </div>
    );
};

export default FilePicker;
