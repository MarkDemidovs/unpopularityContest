#include <iostream>
#include <string>

class Person{
    // private -> encapsulation
    private:
        std::string first;
        std::string last;

    public:
        Person(std::string first, std::string last): first(first), last(last) {}
        Person() = default;

        // setter / mutator
        void setFirstName(std::string firstName) {
            this->first = firstName;
        }

        void setLastName(std::string lastName) {
            this->last = lastName;
        }

        // getter / accessor

        std::string getName(){
            return first + " " + last;
        }


        void printFullName() {
            std::cout << first << " " << last << std::endl;
        }
};

int main() {
    Person me("Mark", "Demidovs");

    me.printFullName();
    std::cout << me.getName() << std::endl;

    Person me2;
    me2.setFirstName("John");
    me2.setLastName("Doe");
    me2.printFullName();

    return 0;
}