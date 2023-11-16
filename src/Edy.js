import '@aws-amplify/ui-react/styles.css';
import { View, Flex, Button, useTheme, TextField, SelectField } from '@aws-amplify/ui-react';
//import { Authenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';

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
    const [docFrontImage7, setDocFrontImage7] = useState(null);
    // アップロードした画像のBase64情報
    const [docFrontImage64, setDocFrontImage64] = useState(null);
    const [docFrontImage264, setDocFrontImage264] = useState(null);
    const [docFrontImage364, setDocFrontImage364] = useState(null);
    const [docFrontImage464, setDocFrontImage464] = useState(null);
    const [docFrontImage564, setDocFrontImage564] = useState(null);
    const [docFrontImage664, setDocFrontImage664] = useState(null);
    const [docFrontImage764, setDocFrontImage764] = useState(null);

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
    const handleFileChange7 = (event) => {
        console.log("files[0]", event.target.files[0])
        setDocFrontImage7(event.target.files[0]);
    };

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
    const onUpload7 = async () => {
        await handleFileUpload(docFrontImage7, setDocFrontImage764);
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

    // データを保存するボタンクリック時
    const onSubmit = async () => {
        // 6mb const url = 'https://c5gzw5serf.execute-api.ap-northeast-1.amazonaws.com/dev/post1';
        //const url = 'https://xkposrh4y6uh44babt4i62vjmm0tvqhw.lambda-url.ap-northeast-1.on.aws/';
        const url = 'http://localhost:3000/api/edy_ekyc'
        //const url = 'http://18.176.182.80:3000/api/edy_ekyc'
        
        try {
            const currentDate = new Date().toISOString();

            const dataToSend = {
                enterpriseId:'1234567890',
                apiAuthKey: '1234567890',
                applyNo: formData.applyNo,
                ekycUserId: formData.ekycUserId,
                ipAddress: '127.0.0.1',
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36 Edg/79.0.309.65',
                ekycStartDate: currentDate, //YYYY-MM-DDThh:mm:ss
                ekycEndDate: currentDate, //YYYY-MM-DDThh:mm:ss
                docType: formData.docType,
                identificationType: '01',
                matchingResult : {
                    matchingCount: 1,
                    docFrontMatch: 'UNMATCH',
                    docTiltedMatch: 'UNMATCH',
                    docLiveMatch: 'UNMATCH',
                    docFrontScore: '0.1234',
                    docTiltedScore: '0.1234',
                    docLiveScore: '0.1234',
                },
                imageResult : {
                    docFrontImage: docFrontImage64,
                    docFrontTrimImage: docFrontImage264,
                    docBackImage: docFrontImage364,
                    docBackTrimImage: docFrontImage464,
                    docTiltedImage: docFrontImage564,
                    docTiltedTrimImage: docFrontImage664,
                    selfieImage: docFrontImage764,    
                },
                ocrDriverResult : {
                    name: '野田江川富士一二三四五左衛門助太郎',
                    birthDate: '令和01年01月01日生',
                    address: '秋田県北秋田郡上小阿仁村大字沖田面字小蒲野下タ川原１−２−３−４−５−６−７−８−９−１０',
                    deliveryDate: '令和01年01月01日12345',
                    expireDate: '2020年（令和02年）01月01日',
                    licenseNumber: '123456789012',
                    checkDigit: '1',
                    lastName: '野田',
                    firstName: '江川富士一二三四五左衛門助太郎',
                    address1: '秋田県',
                    address2: '北秋田郡',
                    address3: '上小阿仁村大字沖田面字小蒲野下タ川原',
                    address4: '１−２−３−４−５−６−７−８−９−１０',
                    postalCode: '5551234',
                    addressKana1: 'アキタケン',
                    addressKana2: 'キタアキタグン',
                    addressKana3: 'カミコアニムラオキタオモテオガマノシタカワラ',
                    lastNameKana: 'ノダ',
                    firstNameKana: 'エガワフジヒフミシゴザエモンノスケタロウ',
                    lastNameRoma: 'NODA',
                    firstNameRoma: 'EGAWAFUJIHIHUMISHIGOZAEMONNOSUKETARO',
                    condition: '眼鏡等　準中型で運転できる準中型車は準中型車（5t）に限る　準中型車（5t）と普通車はAT車に限る　普通二輪はAT車に限る　大特車は農耕車に限る　けん引は農耕車に限る',
                    commission: '東京都公安委員会',
                    kindDate1: '令和01年01月01日',
                    kindDate2: '令和01年01月01日',
                    kindDate3: '令和01年01月01日',
                    kindType1: '1',
                    kindType2: '1',
                    kindType3: '1',
                    kindType4: '1',
                    kindType5: '1',
                    kindType6: '1',
                    kindType7: '1',
                    kindType8: '1',
                    kindType9: '1',
                    kindType10: '1',
                    kindType11: '1',
                    kindType12: '1',
                    kindType13: '1',
                    kindType14: '1',
                    kindType15: '1',
                    kindType16: '1',
                    licenseColor: '3',
                    birthDateCheck: '00',
                    deliveryDateCheck: '00',
                    expireDateCheck: '00',
                    licenseNumberCheck: '00',
                    kindDateCheck: '00',
                },
                ocrMynumberResult: {
                    name: '野田江川富士一二三四五左衛門助太郎',
                    address: '秋田県北秋田郡上小阿仁村大字沖田面字小蒲野下タ川原１−２−３−４−５−６−７−８−９−１０',
                    birthDate: '令和01年01月01日',
                    gender: '男',
                    mayor: '加藤錠司郎',
                    expireDate: '2020年1月1日まで有効',
                    address1: '秋田県',
                    address2: '北秋田郡',
                    address3: '上小阿仁村大字沖田面字小蒲野下タ川原',
                    address4: '１−２−３−４−５−６−７−８−９−１０',
                    postalCode: '5551234',
                    addressKana1: 'アキタケン',
                    addressKana2: 'キタアキタグン',
                    addressKana3: 'カミコアニムラオキタオモテオガマノシタカワラ',
                    lastName: '野田',
                    firstName: '江川富士一二三四五左衛門助太郎',
                    lastNameKana: 'ノダ',
                    firstNameKana: 'エガワフジヒフミシゴザエモンノスケタロウ',
                    lastNameRoma: 'NODA',
                    firstNameRoma: 'EGAWAFUJIHIHUMISHIGOZAEMONNOSUKETARO',
                    birthDateCheck: '0',
                    expireDateCheck: '0',
                },
                ocrDriverBackResult: {
                    descriptionCheck: '0',
                },
                ocrDriverCheckResult: {
                    resultCode: '0',
                    nameCheck: '0',
                    nameCheckScore: '0.0001',
                    addressCheck: '0',
                    addressCheckScore: '0.0001',
                    licenseNumberCheck: '0',
                    licenseNumberCheckScore: '0.0001',
                    faceCheck: '0',
                    faceCheckScore: '0.0001',
                },
                ocrResidenceResult: {
                    cardNumber: 'AB12345678CD',
                    name: 'NODA EGAWAFUJIHIHUMISHIGOZAEMONNOSUKETARO',
                    dateOfBirth: '2020年01月01日',
                    sex: 'M',
                    nationalityRegion: 'グレートブリテン及び北アイルランド連合王国（イギリス）',
                    address: '秋田県北秋田郡上小阿仁村大字沖田面字小蒲野下タ川原１−２−３−４−５−６−７−８−９−１０',
                    periodAndExpiration: '2020年01月01日',
                    dateOfDelivery: '2020年01月01日',
                    expirationDate: '2020年01月01日まで有効',
                    address1: '秋田県',
                    address2: '北秋田郡',
                    address3: '上小阿仁村大字沖田面字小蒲野下タ川原',
                    address4: '１−２−３−４−５−６−７−８−９−１０',
                    postalCode: '5551234',
                    addressKana1: 'アキタケン',
                    addressKana2: 'キタアキタグン',
                    addressKana3: 'カミコアニムラオキタオモテオガマノシタカワラ',
                },
            };
            console.log('dataToSend', JSON.stringify(dataToSend))
            // エンコードされたファイルを含むフォームデータでPOSTリクエストを送信
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dataToSend),
            });
            console.log("response", response);
            const data = await response.json();
            console.log("status_code", data.statusCode)
            if (data.statusCode === 200) {
                console.log('Success:', data);
            } else {
                console.log('Failure:', data);
            }
        } catch (error) {
            console.error('<onSubmit> An error has occurred! ', error);
        }
    }
    
    // データを取得するボタンクリック時
    const onGet = async () => {
        const url = 'http://localhost:3000/api/edy_get_ekyc'
        //const url = 'http://18.176.182.80:3000/api/edy_get_ekyc'
        
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            console.log("response", response);
            const data = await response.json();
            console.log("status_code", data.statusCode)
            if (data.statusCode === 200) {
                console.log('Success:', data);
            } else {
                console.log('Failure:', data);
            }
        } catch (error) {
            console.error('<onGet> An error has occurred! ', error);
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
                        <Button variation="warning" onClick={onSubmit} size="default">データを保存する</Button>
                        <Button variation="warning" onClick={onGet} size="default">データを取得する</Button>
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
                        <Flex direction="row" alignItems="center">
                            <input type="file" name="docFrontImage7" onChange={handleFileChange7} />
                            <Button onClick={onUpload7} size="small">アップロード7</Button>
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