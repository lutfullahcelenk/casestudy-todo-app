import React from "react";
import { Resume, StyledAbout, StyledImage, StyledParagraph } from "./styles";
import Photo from "../../assets/Profil.jpeg";
import { TodoTitle } from "../../components/ToDo/styles";

const About = () => {
  return (
    <>
      <StyledAbout>
        <div>
          <Resume>
            <img
              className="wave-emoji"
              alt="Wave Emoji"
              src="https://twemoji.maxcdn.com/2/72x72/1f44b-1f3fc.png"
            />
            
            <TodoTitle>Merhaba! Ben Lütfullah...</TodoTitle>

            <StyledParagraph>
              Kendine güvenen ve içinde bulunduğu durumda her zaman en iyisini
              yapmayı amaçlayan, öğrenme aşkı ve isteğiyle yeni atılımlar
              gerçekleştirecek iradeye sahip bir FRONT-END DEVELOPER, diğer bir
              deyişle ÖN-UÇ GELİŞTİRİCİ'yim.
              <br />
              <br />
              Eğitim hayatım ve tecrübelerim doğrultusunda farklı insanlarla
              birlikte çalışma, bir takımda yer alma ve birlikte üretebilmeyi
              öğrenme fırsatım oldu. İşini severek yapan ve detayları çok
              önemseyen biriyim. İnsan ilişkileri noktasında esnek olmanın bana
              verimlilik olarak geri döndüğünü sıklıkla tecrübe ettim. Yeni
              şeyler öğrenmeyi, yeteneklerimi geliştirmeyi çok önemsiyor, bu
              amaçla insan ilişkilerinin öğreticiliğinden faydalanmak
              gerektiğini düşünüyorum. Ekibimdeki insanlarla bilgi alışverişinde
              bulunmak benim için bu nedenle çok önemli. Fikir geliştirmenin
              zihni, dolayısıyla bedeni sürekli aktif tuttuğunun bilincinde
              olarak hem iş hem de bireysel hayatta yaratıcı olmanın önemli
              olduğunu düşünüyorum.
              <br />
              <br />
              Başta HTML5, CSS3, Javascript olmak üzere ön yüz geliştirmede sık
              kullanılan ReactJS, Bootstrap4, MaterialUI, SASS,
              RestAPI,SemanticUI gibi son dönemin gelişen teknolojisine ayak
              uydurabileceğim birçok kütüphane ve framework bilgisine sahibim.
              Saygılarımla...
            </StyledParagraph>
          </Resume>
        </div>
        <StyledImage>
          <img src={Photo} alt="ProfilPhoto" />
        </StyledImage>
      </StyledAbout>
    </>
  );
};

export default About;
