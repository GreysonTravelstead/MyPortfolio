import FileSaver from 'file-saver';




const saveFile = () => 
{
    FileSaver.saveAs(
        process.env.PUBLIC_URL + "/resource/Resume.pdf", 
        "GreysonTravelsteadResume.pdf"
    );
}

export default saveFile;