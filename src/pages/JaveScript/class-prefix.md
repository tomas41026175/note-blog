# class的前綴語法(實現封裝)
###### tags: `JavaScript`
### class在默認狀況下是**pulic**的
- 可以透過"#"前綴來實現私有class，由JS強制執行。
    - 語法
    ```
    class ClassWithPrivateField {
      #privateField;
    }

    class ClassWithPrivateMethod {
      #privateMethod() {
        return 'hello world';
      }
    }

    class ClassWithPrivateStaticField {
      static #PRIVATE_STATIC_FIELD;
    }

    class ClassWithPrivateStaticMethod {
      static #privateStaticMethod() {
        return 'hello world';
      }
    }
    ```
    - private字段
        - 以"#"開頭，#視為名稱的一部分，宣告&訪問時都需要加上。
        - 從作用域以外引用#名稱、內部在位勳告的情況下引用private字段，或嘗試使用```delete```移除宣告的字段都會回報*語法error*
        - 可以使用```in```運算符檢查private字段是否存在，返回布林值。
    
    ```
    class ClassWithPrivateField {
      #privateField;

      constructor() {
        this.#privateField = 42;
        delete this.#privateField;   // 语法错误
        this.#undeclaredField = 444; // 语法错误
      }
    }

    const instance = new ClassWithPrivateField()
    instance.#privateField === 42;   // 语法错误
    ```