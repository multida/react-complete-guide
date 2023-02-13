## 음식 주문 사이트

로컬 이미지를 불러오고 싶다면 상단에 이미지 경로를 임포트해서 동적으로 삽입시킬 수 있다. 
예를 들어 
``` jsx 
import mealsImage from '../../assets/meals.jpg'

<img src={mealsImage} />
```

---

module.css 사용할 때
``` css
className={classes.button} //.button
className={classes[meal-id]} //.meal-id
```

---
{props.children}
