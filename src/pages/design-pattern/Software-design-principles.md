# 常見的設計原則

SOLID 
    - S - Single Responsibility Principle (單一職責原則)
    - O - Open/Closed Principle (開放封閉原則)
      - 開放擴充，封閉修改
    - L - Liskov Substitution Principle (里氏替換原則)
      - 子型態必須遵從父型態的行為進行設計。
    - I - Interface Segregation Principle (介面隔離原則)
    - D - Dependency Inversion Principle (依賴反轉原則)

DRY 原則
    - Don't Repeat Yourself。不要重複自己的程式碼。

KISS 原則
    - Keep It Simple, Stupid。保持程式簡單和直白。

YAGNI
    - You Ain't Gonna Need It。除非真的需要，否則不要添加額外的功能或複雜性。

Law of Demeter (LoD) 或稱為「最少知識原則」
    - 一個物件應該盡可能少地知道其他物件，並只和其緊密相關的物件進行交互。

Separation of Concerns (SoC)
    - 將一個應用程式分割成不同的部分，每一部分專注於一個單獨的關注點。

Tell, Don't Ask
    - 鼓勵物件的方法去執行某個操作，而不是先詢問物件的狀態再決定操作。

Fail-Fast Principle
    - 系統應該在早期階段，如資料輸入時，立即檢測和報告任何錯誤或異常。
    - 與 Error first 不同的地方在於 一個專注於在前期快速檢測 & 回報 Error，後者則是在開發的時候優先處理 Error 的狀況。


Composition Over Inheritance
    - 這是一種鼓勵使用組合而不是繼承來實現代碼重用的策略。這樣可以使系統更加靈活並減少不必要的繼承結構。

Convention Over Configuration
    - 在沒有特定指示的情況下，軟體提供合理的預設行為，減少開發者需要進行的決策和配置。

Principle of Least Privilege (PoLP)
    - 在一個系統中，一個程序或用戶應該只擁有完成其任務所必需的最少權限。

Postel's Law (或 Robustness Principle)
    - 在你的輸出上保持嚴格，在你的輸入上保持寬鬆。
    
Feature Toggles (或 Feature Flags)
    - 這允許開發者動態地打開或關閉特定功能，而不需要改變代碼。

Eager vs Lazy Loading
    - 這涉及到資料應該何時被加載的策略 - 是在一開始就全部加載還是只在真正需要時加載。

Avoiding Premature Optimization
    - 首先使其正確，然後再考慮優化。早期優化可能會帶來複雜性和其他問題。

Idempotency Principle
    - 在分布式系統中，一個操作可以多次執行，但結果仍然相同。

GRASP (General Responsibility Assignment Software Patterns / 一般責任分配軟體模式) 
    - RASP 原則為軟體設計師提供了一個框架，幫助他們在設計過程中作出更有意識、更結構化的決策，尤其是關於如何分配責任和角色給不同的類和對象。

    Information Expert:
        - 分配責任給該領域中擁有所需資訊的對象，使其執行某一行為。
    例如，如果一個 Order 對象有所有計算訂單總金額所需的資訊，那麼 Order 對象應該有一個方法來計算總金額。

    Creator:
        - 誰應該負責創建某一對象的實例？這一原則建議：
    如果一個類 A 聚合類 B 的對象，或者類 A 使用類 B 的對象，或者類 A 記錄類 B 的對象，那麼類 A 應該創建類 B 的對象。

    Controller:
        - 表示一組操作的受控界面或者系統的外部操作，負責處理系統事件。
    在設計模型層和界面層之間的交互時，Controller 扮演了中間者的角色。

    Low Coupling:
        - 降低類與類之間的依賴。低耦合可以增加類的重用性和靈活性。

    High Cohesion:
        - 確保一個類只有一個職責或原因去改變。高內聚可以使類更易於維護和重用。

    Polymorphism:
        - 通過多態性分配行為到那些變動的地方。當行為變動或者擴展時，多態性是一個很好的選擇。

    Pure Fabrication:
        - 創建不真實存在的類，其主要目的是為了實現某些特定的設計目標，如達到高內聚或低耦合。

    Indirection:
        - 通過間接性減少直接的耦合。例如，介面或中介者模式可以用來隔離對象間的直接互動。

    Protected Variations:
        - 保護那些不穩定的概念不受變動的影響。這可以通過抽象、封裝或模式實現，以保護不穩定的概念。