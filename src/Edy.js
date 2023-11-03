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

    const [docFrontImage, setDocFrontImage] = useState(null);

    const handleFileChange = (event) => {
        setDocFrontImage(event.target.files[0]);
    };

    // POSTボタンクリック時
    const onSubmit = async (e) => {
        e.preventDefault()
        const url = 'https://c5gzw5serf.execute-api.ap-northeast-1.amazonaws.com/dev/post1';
        try {
            // ファイルのBase64エンコード
            const readerDocFrontImage = new FileReader();
            readerDocFrontImage.onloadend = async function () {
                //console.log('docFrontImage', readerDocFrontImage.result)
                
                // ファイルがBase64にエンコードされた後に実行される処理
                const dataToSend = {
                    applyNo: formData.applyNo,
                    ekycUserId: formData.ekycUserId,
                    docType: formData.docType,
                    //docFrontImage: readerDocFrontImage.result,
                };
                console.log('dataToSend', JSON.stringify(dataToSend))
                // エンコードされたファイルを含むフォームデータでPOSTリクエストを送信
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(dataToSend),
                });
                const data = await response.json();
                console.log('Success:', data);
            };
            readerDocFrontImage.readAsDataURL(docFrontImage);
            
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
                        
                        <input type="file" name="docFrontImage" onChange={handleFileChange} />
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