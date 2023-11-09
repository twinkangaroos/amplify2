import '@aws-amplify/ui-react/styles.css';
import { View, Flex, Button, useTheme, TextField, SelectField } from '@aws-amplify/ui-react';
//import { Authenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';

const Edy = () => {

    const { tokens } = useTheme()

    const [formData, setFormData] = useState({
        applyNo: "MOSHIKOMI0123456789012345678901234567890",
        ekycUserId: "USER1234561234567890",
        docType: "01",
    });

    // 選択した画像のFile情報
    const [docFrontImage, setDocFrontImage] = useState(null);
    const [docFrontImage2, setDocFrontImage2] = useState(null);
    const [docFrontImage3, setDocFrontImage3] = useState(null);
    const [docFrontImage4, setDocFrontImage4] = useState(null);
    const [docFrontImage5, setDocFrontImage5] = useState(null);
    const [docFrontImage6, setDocFrontImage6] = useState(null);
    // アップロードした画像のBase64情報
    const [docFrontImage64, setDocFrontImage64] = useState(null);
    const [docFrontImage264, setDocFrontImage264] = useState(null);
    const [docFrontImage364, setDocFrontImage364] = useState(null);
    const [docFrontImage464, setDocFrontImage464] = useState(null);
    const [docFrontImage564, setDocFrontImage564] = useState(null);
    const [docFrontImage664, setDocFrontImage664] = useState(null);

    // ファイル選択時
    const handleFileChange = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage(event.target.files[0]);
    };
    const handleFileChange2 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage2(event.target.files[0]);
    };
    const handleFileChange3 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage3(event.target.files[0]);
    };
    const handleFileChange4 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage4(event.target.files[0]);
    };
    const handleFileChange5 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage5(event.target.files[0]);
    };
    const handleFileChange6 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage6(event.target.files[0]);
    };

    // ファイルアップロード時
    // const onUpload = async () => {
    //     try {
    //         if (docFrontImage) {
    //             const reader = new FileReader();
    //             reader.onloadend = async function () {
    //                 const base64Data = reader.result;
    //                 setDocFrontImage64(base64Data);
    //                 // Base64のバイト数を計算
    //                 const fileSizeInBytes = (4 * Math.ceil(base64Data.length / 3)) * 0.75;
    //                 console.log("Base64データのサイズ:", fileSizeInBytes/1000, "kb");
    //             };
    //             reader.readAsDataURL(docFrontImage);
    //             const fileSize = docFrontImage.size;
    //             console.log("ファイルのサイズ:", fileSize/1000, "kb");
    //         }
    //         else {
    //             alert("ファイルを選択してください")
    //         }
    //     } catch (error) {
    //         console.error('An error has occurred while uploading!', error);
    //     }
    // }
    // const onUpload2 = async () => {
    //     try {
    //         if (docFrontImage2) {
    //             const reader = new FileReader();
    //             reader.onloadend = async function () {
    //                 const base64Data = reader.result;
    //                 setDocFrontImage264(base64Data);
    //                 // Base64のバイト数を計算
    //                 const fileSizeInBytes = (4 * Math.ceil(base64Data.length / 3)) * 0.75;
    //                 console.log("Base64データのサイズ:", fileSizeInBytes/1000, "kb");
    //             };
    //             reader.readAsDataURL(docFrontImage2);
    //             const fileSize = docFrontImage2.size;
    //             console.log("ファイルのサイズ:", fileSize/1000, "kb");
    //         }
    //         else {
    //             alert("ファイルを選択してください")
    //         }
    //     } catch (error) {
    //         console.error('An error has occurred while uploading!', error);
    //     }
    // }

    // ファイルアップロード時
    const onUpload = async () => {
        await handleFileUpload(docFrontImage, setDocFrontImage64);
    };
    const onUpload2 = async () => {
        await handleFileUpload(docFrontImage2, setDocFrontImage264);
    };
    const onUpload3 = async () => {
        await handleFileUpload(docFrontImage3, setDocFrontImage364);
    };
    const onUpload4 = async () => {
        await handleFileUpload(docFrontImage4, setDocFrontImage464);
    };
    const onUpload5 = async () => {
        await handleFileUpload(docFrontImage5, setDocFrontImage564);
    };
    const onUpload6 = async () => {
        await handleFileUpload(docFrontImage6, setDocFrontImage664);
    };

    // ファイルアップロード処理を共通化する関数
    const handleFileUpload = async (file, setImageState) => {
        try {
            if (file) {
                const reader = new FileReader();
                reader.onloadend = async function () {
                    const base64Data = reader.result;
                    setImageState(base64Data);
                    // Base64のバイト数を計算
                    const fileSizeInBytes = (4 * Math.ceil(base64Data.length / 3)) * 0.75;
                    console.log("Base64データのサイズ:", fileSizeInBytes / 1000, "kb");
                };
                reader.readAsDataURL(file);
                const fileSize = file.size;
                console.log("ファイルのサイズ:", fileSize / 1000, "kb");
            } else {
                alert("ファイルを選択してください");
            }
        } catch (error) {
            console.error('An error has occurred while uploading!', error);
        }
    };

    // POSTボタンクリック時
    const onSubmit = async () => {
        const url = 'https://c5gzw5serf.execute-api.ap-northeast-1.amazonaws.com/dev/post1';
        //const url = 'https://xkposrh4y6uh44babt4i62vjmm0tvqhw.lambda-url.ap-northeast-1.on.aws/';
        try {
            const dataToSend = {
                applyNo: formData.applyNo,
                ekycUserId: formData.ekycUserId,
                docType: formData.docType,
                docFrontImage: docFrontImage64,
                docFrontImage2: docFrontImage264,
                docFrontImage3: docFrontImage364,
                docFrontImage4: docFrontImage464,
                docFrontImage5: docFrontImage564,
                docFrontImage6: docFrontImage664,
            };
            console.log('dataToSend', JSON.stringify(dataToSend))
            // エンコードされたファイルを含むフォームデータでPOSTリクエストを送信
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dataToSend),
            });
            console.log("response",response);
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('An error has occurred! ', error);
        }
    }
    
    // キー入力時
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        /*
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
        ]}>
        {({ signOut, user }) => (
        */
            <>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                    style={{ textAlign: 'left' }}
                >
                    <Flex
                        justifyContent="center"
                        style={{
                            paddingBottom: '20px',
                            position: 'sticky',
                            top: 0, // 画面上部からの位置を指定します
                            zIndex: 1, // 必要に応じてz-indexを調整します
                        }}
                    >
                        <Button variation="warning" onClick={onSubmit} size="large">APIを呼び出す</Button>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <TextField
                            onChange={handleInputChange}
                            name="applyNo"
                            descriptiveText="事業者にてeKYC利用者を識別する申込番号等を設定"
                            placeholder="申込番号"
                            label="申込番号"
                            value={formData.applyNo}
                        />
                        <TextField
                            onChange={handleInputChange}
                            name="ekycUserId"
                            descriptiveText="ポラリファイにて利用者ごとに採番したユニークなID"
                            placeholder="eKYCユーザーID"
                            label="eKYCユーザーID"
                            value={formData.ekycUserId}
                        />
                        <SelectField
                            onChange={handleInputChange}
                            name="docType"
                            label="本人確認書類"
                            //descriptiveText="本人確認書類"
                            value={formData.docType}
                        >
                            <option value="01">運転免許証</option>
                            <option value="02">マイナンバーカード</option>
                            <option value="03" disabled>在留カード</option>
                            <option value="04">保険証</option>
                            <option value="05">パスポート</option>
                            <option value="06">住民基本台帳カード</option>
                            <option value="07">運転経歴証明書</option>
                            <option value="08">特別永住者証明書</option>
                        </SelectField>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage" onChange={handleFileChange} />
                            <Button onClick={onUpload} size="small">アップロード1</Button>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage2" onChange={handleFileChange2} />
                            <Button onClick={onUpload2} size="small">アップロード2</Button>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage3" onChange={handleFileChange3} />
                            <Button onClick={onUpload3} size="small">アップロード3</Button>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage4" onChange={handleFileChange4} />
                            <Button onClick={onUpload4} size="small">アップロード4</Button>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage5" onChange={handleFileChange5} />
                            <Button onClick={onUpload5} size="small">アップロード5</Button>
                        </Flex>
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage6" onChange={handleFileChange6} />
                            <Button onClick={onUpload6} size="small">アップロード6</Button>
                        </Flex>
                    </Flex>
                </View>
            </>
        /*
        )}
        </Authenticator>
        */
    )
}

export default Edy